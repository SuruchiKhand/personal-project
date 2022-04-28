from django.http import HttpResponse
import requests


API_KEY= "q4vri85gib1LnDS9TSxUhXbNiPSBvxvmcMkCjrQb"
ENDPOINT = "https://api.fda.gov/drug/drugsfda.json?"
HEADERS = {
    "Authorization": 'bearer %s' % API_KEY
}

def get_openfda_data(date,limit):
    print(" I am here", date)
    PARAMETERS = {
        "search":"submissions.submission_status_date:"+date,
        "limit":limit
    }

    print ("endpoint", ENDPOINT)
    print ("PARAMS", PARAMETERS)
    print ("HEADERS", HEADERS)
    response = requests.get(url=ENDPOINT, params= PARAMETERS, headers = HEADERS)
    print("final response", response)
    return response