using System;
using System.Linq;

namespace EntityFrameworkExperiments.Classes
{
    class Experiment2
    {
        /// <summary>
        /// Returns only specific columns from a log table
        /// </summary>
        public static void Run()
        {
            Guid apiKey = new Guid("A94A864D-0B15-4B0B-8917-55C6E7DE19FE");

            if (apiKey == Guid.Empty)
                return;

            var ctx = new TestDatabaseEntities();

            var query = from l in ctx.WebService_Log
                         where l.ApiKey == apiKey
                         select new { 
                            Id = l.ID,
                            Url = l.URL,
                            DateTimeRequested = l.DateTimeRequested,
                            DateTimeResponded = l.DateTimeResponded
                         };

            Console.WriteLine(query.Count());

            foreach (var log in query)
            {
                TimeSpan duration = new TimeSpan();
                if (log.DateTimeRequested != null && log.DateTimeResponded != null)
                {
                    DateTime responded = (DateTime)log.DateTimeResponded;
                    DateTime requested = (DateTime)log.DateTimeRequested;
                    duration = responded.Subtract(requested);
                }
                    
                Console.WriteLine("{0} {1} {2}", log.Id, duration, log.Url);
            }
        }
    }
}
