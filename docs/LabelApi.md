# Unwaffle.LabelApi

All URIs are relative to *https://api.unwaffle.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLabel**](LabelApi.md#addLabel) | **POST** /label | Add or update a Label


<a name="addLabel"></a>
# **addLabel**
> addLabel(opts)

Add or update a Label



### Example
```javascript
var Unwaffle = require('unwaffle');
var defaultClient = Unwaffle.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new Unwaffle.LabelApi();

var opts = { 
  'body': new Unwaffle.Label() // Label | A Label object. The API will also happily consume a CSV or TSV with one record per line and no header row.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addLabel(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Label**](Label.md)| A Label object. The API will also happily consume a CSV or TSV with one record per line and no header row. | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, text/csv
 - **Accept**: text/plain

