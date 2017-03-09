# Unwaffle.ParticipantApi

All URIs are relative to *https://api.unwaffle.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addParticipant**](ParticipantApi.md#addParticipant) | **POST** /participant | Add or update a Participant


<a name="addParticipant"></a>
# **addParticipant**
> addParticipant(opts)

Add or update a Participant



### Example
```javascript
var Unwaffle = require('unwaffle');
var defaultClient = Unwaffle.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Unwaffle.ParticipantApi();

var opts = { 
  'body': new Unwaffle.Participant() // Participant | A Participant object. The API will also happily consume a CSV or TSV with one record per line and no header row.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addParticipant(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Participant**](Participant.md)| A Participant object. The API will also happily consume a CSV or TSV with one record per line and no header row. | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, text/csv
 - **Accept**: text/plain

