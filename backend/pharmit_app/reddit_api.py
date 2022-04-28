from django.http import HttpResponse
import requests


ENDPOINT = "https://api.pushshift.io/reddit/search/submission?"
HEADERS = {

}

def get_reddit_data(query,limit):
    print(" I am here in reddit ", query)
    PARAMETERS = {
        "q":query,
        "limit":limit
    }
    print ("PARAMS", PARAMETERS)
    print ("HEADERS", HEADERS)
  
    response = requests.get(url=ENDPOINT, params= PARAMETERS, headers = HEADERS)
    print("final response", response)
    return response