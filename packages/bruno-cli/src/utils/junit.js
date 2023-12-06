/*
    Take in result list, spit out xml document.

    a result looks like this:
    
    return {
      test: {
        filename: filename,
      },
      request: {
        method: request.method,
        url: request.url,
        headers: request.headers,
        data: request.data
      },
      response: {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        data: response.data,
        responseTime
      },
      error: null,
      assertionResults,
      testResults
    };

*/


const generateJunitReport = (summary, results) => {

}

module.exports = {
    generateJunitReport,
};
