#!/usr/bin/env python
import pika
import time
import json
import base64
import hashlib
import os


FILE_DESTINATION = '/Users/beharrison/Documents/docs/test/uploads'
QUEUE_URL = 'localhost' 
QUEUE_NAME = 'queue_name'


def checkFileAccuracy(originalFileSize, originalHash, _file):
    hash = hashlib.sha256(_file)
    hash_hexdigest = hash.hexdigest()
    return originalFileSize == len(_file) and originalHash == hash_hexdigest


def convertStringToBytes(byteString):
    byteString = byteString.strip('b')
    byteString = byteString.strip("'")
    return str.encode(byteString)


def saveFile(filename, fileContent):
    filename = time.strftime('%Y%m%d%H%M%S-') + filename
    filepath = os.path.join(FILE_DESTINATION, filename)

    file = open(filepath, 'wb+')
    file.write(fileContent)
    file.close()


connection = pika.BlockingConnection(pika.ConnectionParameters(QUEUE_URL))
channel = connection.channel()

channel.queue_declare(queue=QUEUE_NAME, durable=True)

def callback(ch, method, properties, body):
    # print(" [x] Received %r" % body)
    strBody = body.decode('utf-8')
    data = json.loads(strBody)

    base64_content = convertStringToBytes(data['base64_content'])
    decodedFileContent = base64.b64decode(base64_content)

    # check original hash with decoded content
    hashIsAccurate = checkFileAccuracy(data['file_size'], data['sha256_content'], decodedFileContent)
    
    # Save file
    if hashIsAccurate:
        saveFile(data['file_name'], decodedFileContent)

    # ch.basic_ack(delivery_tag = method.delivery_tag)

channel.basic_consume(callback, queue=QUEUE_NAME)

print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()

connection.close()
