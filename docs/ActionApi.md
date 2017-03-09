# Unwaffle.ActionApi

All URIs are relative to *https://api.unwaffle.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAction**](ActionApi.md#addAction) | **POST** /action | Add an action


<a name="addAction"></a>
# **addAction**
> addAction(opts)

Add an action



### Example
```javascript
var Unwaffle = require('unwaffle');
var defaultClient = Unwaffle.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Unwaffle.ActionApi();

var opts = { 
  'body': new Unwaffle.TransportObject() // TransportObject | A TransportObject describing the action. The API will also happily consume a CSV or TSV with one record per line and no header row.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addAction(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TransportObject**](TransportObject.md)| A TransportObject describing the action. The API will also happily consume a CSV or TSV with one record per line and no header row. | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, text/csv
 - **Accept**: text/plain

