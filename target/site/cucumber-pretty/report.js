$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Verify Invalid Login",
  "description": "",
  "id": "login-feature;verify-invalid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@regression-1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open the default browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter mohammad@technosoftacademy.io into username text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter test1234 into password text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that i am an invalid login page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I close the default browser",
  "keyword": "And "
});
formatter.match({
  "location": "SharedSD.before()"
});
formatter.result({
  "duration": 38131098061,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 1446930865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohammad@technosoftacademy.io",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 43
    }
  ],
  "location": "LoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "duration": 7824644317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 22
    }
  ],
  "location": "LoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "duration": 26840274498,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.clickOnLoginButton()"
});
formatter.result({
  "duration": 30813917323,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLoginPage()"
});
formatter.result({
  "duration": 5930276696,
  "status": "passed"
});
formatter.match({
  "location": "SharedSD.after()"
});
formatter.result({
  "duration": 14344200842,
  "status": "passed"
});
});