using System;
using System.Linq;

namespace EntityFrameworkExperiments.Classes
{
    class Experiment1
    {
        /// <summary>
        /// Loads a user record
        /// </summary>
        public static void Run()
        {
            Console.WriteLine("Enter Username:");
            string username = Console.ReadLine();

            var ctx = new TestDatabaseEntities();

            //var query = ctx.Logins.Where(x => x.username == username);

            var query2 = from l in ctx.Login
                         where l.username == username
                         select l;

            foreach (var login in query2)
            {
                Console.WriteLine("{0} {1} {2}", login.username, login.password, login.active);
            }
        }
    }
}
