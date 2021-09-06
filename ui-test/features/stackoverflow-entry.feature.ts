import {RequestMock, Selector} from "testcafe";

export class StackoverflowEntryFeature {
  stackoverFlowEntrySelector: string = '[cafe=stackoverflow-entry]';
  stackoverFlowEntries: Selector = Selector(this.stackoverFlowEntrySelector);
  stackoverFlowNotAnsweredEntries: Selector = Selector('[cafe=stackoverflow-entry].entry--answered');
  stackoverFlowAnsweredEntries: Selector = Selector('[cafe=stackoverflow-entry]:not(.entry--answered)');

  constructor() {
  }

  getStackoverflowEntryDate(stackoverflowEntry: Selector): Promise<string> {
    return stackoverflowEntry.find('[cafe=stackoverflow-date]').innerText;
  }

  getStackoverflowEntryTitle(stackoverflowEntry: Selector): Promise<string> {
    return stackoverflowEntry.find('[cafe=stackoverflow-title]').innerText;
  }

  getStackoverflowEntryAnswers(stackoverflowEntry: Selector): Promise<string> {
    return stackoverflowEntry.find('[cafe=stackoverflow-answer-count]').innerText;
  }

  isStackoverflowEntrySolved(stackoverflowEntry: Selector): Promise<boolean> {
    return stackoverflowEntry.hasClass('entry--answered');
  }

  createMockResponses(): RequestMock[] {
    return [
      RequestMock().onRequestTo(new RegExp(/.*api\.stackexchange\.com\/2\.2\/search.*TypeScript$/)).respond(mockResponseTypescript, 200, {'access-control-allow-origin': '*'}),
      RequestMock().onRequestTo(new RegExp(/.*api\.stackexchange\.com\/2\.2\/search.*Angular2$/)).respond(mockResponseAngular, 200, {'access-control-allow-origin': '*'}),
      RequestMock().onRequestTo(new RegExp(/.*api\.stackexchange\.com\/2\.2\/search.*Weather$/)).respond(mockResponseWeather, 200, {'access-control-allow-origin': '*'})
    ];
  }
}

const mockResponseTypescript: any = {
  "items": [{
    "tags": ["typescript", "interface"],
    "owner": {"user_type": "does_not_exist", "display_name": "user6101582"},
    "is_answered": true,
    "view_count": 316934,
    "accepted_answer_id": 37233777,
    "answer_count": 20,
    "score": 1296,
    "last_activity_date": 1630869321,
    "creation_date": 1463277232,
    "last_edit_date": 1623235800,
    "question_id": 37233735,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types",
    "title": "TypeScript: Interfaces vs Types"
  }, {
    "tags": ["javascript", "typescript", "inheritance", "overriding"],
    "owner": {
      "reputation": 11,
      "user_id": 5931255,
      "user_type": "registered",
      "accept_rate": 50,
      "profile_image": "https://www.gravatar.com/avatar/763d3f2f093e6f5fc29e89c0593e59d2?s=128&d=identicon&r=PG&f=1",
      "display_name": "Sergio R.B.",
      "link": "https://stackoverflow.com/users/5931255/sergio-r-b"
    },
    "is_answered": false,
    "view_count": 11,
    "answer_count": 0,
    "score": 0,
    "last_activity_date": 1630868615,
    "creation_date": 1630868615,
    "question_id": 69066401,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/69066401/class-instantiation-method-with-inheritance-in-javascript-typescript",
    "title": "Class instantiation method with inheritance in Javascript/Typescript"
  }, {
    "tags": ["typescript", "prototype", "declaration"],
    "owner": {
      "reputation": 3,
      "user_id": 7709858,
      "user_type": "registered",
      "profile_image": "https://www.gravatar.com/avatar/d59052fddae1c37ba9216f3bd7a7b26e?s=128&d=identicon&r=PG&f=1",
      "display_name": "Dmytro Brazhnyk",
      "link": "https://stackoverflow.com/users/7709858/dmytro-brazhnyk"
    },
    "is_answered": false,
    "view_count": 6,
    "answer_count": 0,
    "score": 0,
    "last_activity_date": 1630867012,
    "creation_date": 1630867012,
    "question_id": 69066244,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/69066244/typescript-declare-merge-for-core-types",
    "title": "TypeScript declare merge for core types"
  }, {
    "tags": ["angular", "typescript", "forms", "angular2-forms"],
    "owner": {
      "reputation": 4320,
      "user_id": 3252285,
      "user_type": "registered",
      "accept_rate": 73,
      "profile_image": "https://i.stack.imgur.com/ljedT.jpg?s=128&g=1",
      "display_name": "Nassim MOUALEK",
      "link": "https://stackoverflow.com/users/3252285/nassim-moualek"
    },
    "is_answered": true,
    "view_count": 235432,
    "protected_date": 1586980407,
    "accepted_answer_id": 39559318,
    "answer_count": 27,
    "score": 262,
    "last_activity_date": 1630866526,
    "creation_date": 1474212197,
    "last_edit_date": 1586758914,
    "question_id": 39559296,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/39559296/typescript-s-angular-framework-error-there-is-no-directive-with-exportas-set",
    "title": "TypeScript-&#39;s Angular Framework Error - &quot;There is no directive with exportAs set to ngForm&quot;"
  }, {
    "tags": ["reactjs", "typescript", "idle-timer"],
    "owner": {
      "reputation": 9,
      "user_id": 5727808,
      "user_type": "registered",
      "profile_image": "https://www.gravatar.com/avatar/28bc5ff9752a5a1fecf7c81c6e4ea2ac?s=128&d=identicon&r=PG&f=1",
      "display_name": "Dillon",
      "link": "https://stackoverflow.com/users/5727808/dillon"
    },
    "is_answered": false,
    "view_count": 9,
    "answer_count": 0,
    "score": 0,
    "last_activity_date": 1630865768,
    "creation_date": 1630865768,
    "question_id": 69066103,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/69066103/typescript-idle-timer-with-useref",
    "title": "Typescript Idle Timer with UseRef"
  }, {
    "tags": ["typescript"],
    "owner": {
      "reputation": 10377,
      "user_id": 159522,
      "user_type": "registered",
      "accept_rate": 79,
      "profile_image": "https://www.gravatar.com/avatar/d60161b5a7b5ad8de7bd71fb3b83c544?s=128&d=identicon&r=PG",
      "display_name": "slifty",
      "link": "https://stackoverflow.com/users/159522/slifty"
    },
    "is_answered": true,
    "view_count": 1751,
    "accepted_answer_id": 64452744,
    "answer_count": 2,
    "score": 1,
    "last_activity_date": 1630864443,
    "creation_date": 1603223907,
    "last_edit_date": 1603224384,
    "question_id": 64452484,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/64452484/how-can-i-safely-access-caught-error-properties-in-typescript",
    "title": "How can I safely access caught Error properties in TypeScript?"
  }, {
    "tags": ["typescript", "webpack", "ts-loader", "typescript-declarations"],
    "owner": {
      "reputation": 837,
      "user_id": 9838670,
      "user_type": "registered",
      "profile_image": "https://www.gravatar.com/avatar/8a925a41f5df664de8916a8ca6291ff7?s=128&d=identicon&r=PG&f=1",
      "display_name": "michaelT",
      "link": "https://stackoverflow.com/users/9838670/michaelt"
    },
    "is_answered": false,
    "view_count": 3,
    "answer_count": 0,
    "score": 0,
    "last_activity_date": 1630864234,
    "creation_date": 1630864234,
    "question_id": 69065888,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/69065888/webpack-5-change-directory-for-typescript-declaration-files",
    "title": "Webpack 5: Change directory for typescript declaration files"
  }, {
    "tags": ["typescript", "vue.js", "nuxt.js", "koa", "nodemon"],
    "owner": {
      "reputation": 1,
      "user_id": 12529661,
      "user_type": "registered",
      "profile_image": "https://i.stack.imgur.com/8QRlj.jpg?s=128&g=1",
      "display_name": "EdenSheng",
      "link": "https://stackoverflow.com/users/12529661/edensheng"
    },
    "is_answered": false,
    "view_count": 10,
    "answer_count": 1,
    "score": 0,
    "last_activity_date": 1630863696,
    "creation_date": 1630856922,
    "question_id": 69064900,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/69064900/when-using-nuxt-ts-with-koa-and-run-dev-commond-the-console-tells-me-compil",
    "title": "When using nuxt + ts with koa and run &quot;dev&quot; commond, the console tells me compile errors in Vue files which use typescript syntax"
  }, {
    "tags": ["node.js", "typescript", "frameworks", "serverless", "serverless-webpack-plugin"],
    "owner": {
      "reputation": 1,
      "user_id": 15390470,
      "user_type": "registered",
      "profile_image": "https://lh3.googleusercontent.com/a-/AOh14Gg3RKhsGPgyqDdKFUCnTm9TFmt6ZjlAQi3ikz_a=k-s128",
      "display_name": "Vibin M John",
      "link": "https://stackoverflow.com/users/15390470/vibin-m-john"
    },
    "is_answered": false,
    "view_count": 15,
    "answer_count": 0,
    "score": -2,
    "last_activity_date": 1630863137,
    "creation_date": 1630862442,
    "last_edit_date": 1630863137,
    "question_id": 69065664,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/69065664/serverless-typescript-error-typeerror-cannot-read-property-1-of-null",
    "title": "Serverless Typescript Error : TypeError: Cannot read property &#39;1&#39; of null"
  }, {
    "tags": ["typescript", "react-native"],
    "owner": {
      "reputation": 73,
      "user_id": 10830534,
      "user_type": "registered",
      "profile_image": "https://www.gravatar.com/avatar/8846eb868a1721a8f986cf2b0c5b303b?s=128&d=identicon&r=PG&f=1",
      "display_name": "Cli Ad",
      "link": "https://stackoverflow.com/users/10830534/cli-ad"
    },
    "is_answered": false,
    "view_count": 13,
    "answer_count": 0,
    "score": 0,
    "last_activity_date": 1630862989,
    "creation_date": 1630862989,
    "question_id": 69065732,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/69065732/should-i-convert-my-whole-project-to-typescript-if-i-want-to-use-one-typescript",
    "title": "Should I convert my whole project to typescript if i want to use one typescript component? React Native"
  }], "has_more": true, "quota_max": 300, "quota_remaining": 97
};
const mockResponseAngular: any = {
  "items": [{
    "tags": ["angular"],
    "owner": {
      "reputation": 63,
      "user_id": 5052933,
      "user_type": "registered",
      "accept_rate": 0,
      "profile_image": "https://www.gravatar.com/avatar/c0e276e40115c193ce10a62c84261cd5?s=128&d=identicon&r=PG&f=1",
      "display_name": "Gorka Sanz Monllor",
      "link": "https://stackoverflow.com/users/5052933/gorka-sanz-monllor"
    },
    "is_answered": true,
    "view_count": 5864,
    "answer_count": 4,
    "score": 1,
    "last_activity_date": 1630773871,
    "creation_date": 1498145015,
    "last_edit_date": 1498159609,
    "question_id": 44703549,
    "content_license": "CC BY-SA 3.0",
    "link": "https://stackoverflow.com/questions/44703549/angular2-cant-bind-to-model-since-it-isnt-a-known-property-of-p-steps",
    "title": "Angular2 : Can&#39;t bind to &#39;model&#39; since it isn&#39;t a known property of &#39;p-steps&#39;"
  }, {
    "tags": ["angular", "angular2-template"],
    "owner": {
      "reputation": 1355,
      "user_id": 1143502,
      "user_type": "registered",
      "accept_rate": 80,
      "profile_image": "https://www.gravatar.com/avatar/8bda394beca9143104173101afda2ec5?s=128&d=identicon&r=PG",
      "display_name": "Hendrik",
      "link": "https://stackoverflow.com/users/1143502/hendrik"
    },
    "is_answered": true,
    "view_count": 43609,
    "accepted_answer_id": 41461924,
    "answer_count": 6,
    "score": 23,
    "last_activity_date": 1630759069,
    "creation_date": 1465455216,
    "question_id": 37718784,
    "content_license": "CC BY-SA 3.0",
    "link": "https://stackoverflow.com/questions/37718784/angular2-ngswitch-with-template-only",
    "title": "Angular2 ngSwitch with &lt;template&gt; only"
  }, {
    "tags": ["typescript", "angular"],
    "owner": {
      "reputation": 8932,
      "user_id": 1819254,
      "user_type": "registered",
      "accept_rate": 66,
      "profile_image": "https://i.stack.imgur.com/27Gbn.png?s=128&g=1",
      "display_name": "Pranjal Mittal",
      "link": "https://stackoverflow.com/users/1819254/pranjal-mittal"
    },
    "is_answered": true,
    "view_count": 147587,
    "accepted_answer_id": 37870025,
    "answer_count": 4,
    "score": 41,
    "last_activity_date": 1630736303,
    "creation_date": 1466111863,
    "last_edit_date": 1466111979,
    "question_id": 37869496,
    "content_license": "CC BY-SA 3.0",
    "link": "https://stackoverflow.com/questions/37869496/console-log-not-working-in-angular2-component-typescript",
    "title": "console.log not working in Angular2 Component (Typescript)"
  }, {
    "tags": ["get", "angular"],
    "owner": {
      "reputation": 22019,
      "user_id": 160527,
      "user_type": "registered",
      "accept_rate": 62,
      "profile_image": "https://www.gravatar.com/avatar/f2af00f8b669405a2a068ddae153ff48?s=128&d=identicon&r=PG",
      "display_name": "Corey Ogburn",
      "link": "https://stackoverflow.com/users/160527/corey-ogburn"
    },
    "is_answered": true,
    "view_count": 22659,
    "accepted_answer_id": 35185329,
    "answer_count": 2,
    "score": 8,
    "last_activity_date": 1630645615,
    "creation_date": 1454522734,
    "question_id": 35184426,
    "content_license": "CC BY-SA 3.0",
    "link": "https://stackoverflow.com/questions/35184426/angular2-http-get-with-body",
    "title": "Angular2 http GET with Body?"
  }, {
    "tags": ["unit-testing", "angular"],
    "owner": {
      "reputation": 6868,
      "user_id": 1266661,
      "user_type": "registered",
      "accept_rate": 89,
      "profile_image": "https://www.gravatar.com/avatar/f2eee1a46014685f93b2579f6e365ae0?s=128&d=identicon&r=PG",
      "display_name": "David Barreto",
      "link": "https://stackoverflow.com/users/1266661/david-barreto"
    },
    "is_answered": true,
    "view_count": 43397,
    "accepted_answer_id": 38181928,
    "answer_count": 4,
    "score": 28,
    "last_activity_date": 1630590314,
    "creation_date": 1456867504,
    "question_id": 35733846,
    "content_license": "CC BY-SA 3.0",
    "link": "https://stackoverflow.com/questions/35733846/how-to-spy-a-service-call-in-angular2",
    "title": "How to spy a service call in Angular2"
  }, {
    "tags": ["google-maps", "angular", "typescript", "angular-cli", "angular2-google-maps"],
    "owner": {
      "reputation": 3064,
      "user_id": 3780040,
      "user_type": "registered",
      "accept_rate": 95,
      "profile_image": "https://i.stack.imgur.com/g8J5b.png?s=128&g=1",
      "display_name": "Milo",
      "link": "https://stackoverflow.com/users/3780040/milo"
    },
    "is_answered": true,
    "view_count": 51874,
    "protected_date": 1534159461,
    "accepted_answer_id": 52200117,
    "answer_count": 12,
    "score": 48,
    "last_activity_date": 1630518320,
    "creation_date": 1487774798,
    "last_edit_date": 1487855874,
    "question_id": 42394697,
    "content_license": "CC BY-SA 3.0",
    "link": "https://stackoverflow.com/questions/42394697/angular2-cannot-find-namespace-google",
    "title": "Angular2 Cannot find namespace &#39;google&#39;"
  }, {
    "tags": ["angular"],
    "owner": {
      "reputation": 97,
      "user_id": 7264754,
      "user_type": "registered",
      "profile_image": "https://lh3.googleusercontent.com/-jqvH4WlBjvA/AAAAAAAAAAI/AAAAAAAAAbY/_EXm1MwOVx4/photo.jpg?sz=128",
      "display_name": "eric-blue",
      "link": "https://stackoverflow.com/users/7264754/eric-blue"
    },
    "is_answered": true,
    "view_count": 26946,
    "accepted_answer_id": 41029325,
    "answer_count": 2,
    "score": 9,
    "last_activity_date": 1630474386,
    "creation_date": 1481148394,
    "last_edit_date": 1630474386,
    "question_id": 41028242,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/41028242/angular2-multiple-constructor-implementations-are-not-allowed-ts2392",
    "title": "Angular2 multiple constructor implementations are not allowed TS2392"
  }, {
    "tags": ["angular", "typescript", "angular-material", "angular2-query-builder"],
    "owner": {
      "reputation": 1,
      "user_id": 3941066,
      "user_type": "registered",
      "profile_image": "https://www.gravatar.com/avatar/28c5cf28e1ddbd08707ecfa7c3fc1b35?s=128&d=identicon&r=PG&f=1",
      "display_name": "Perumal Btech",
      "link": "https://stackoverflow.com/users/3941066/perumal-btech"
    },
    "is_answered": false,
    "view_count": 11,
    "answer_count": 0,
    "score": 0,
    "last_activity_date": 1630327561,
    "creation_date": 1630327561,
    "question_id": 68984427,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/68984427/angular2-query-builder-core-js6456-error-typeerror-cannot-read-property-val",
    "title": "angular2-query-builder - core.js:6456 ERROR TypeError: Cannot read property &#39;value&#39; of undefined at QueryBuilderComponent.addRule"
  }, {
    "tags": ["javascript", "css", "angular", "charts", "ngx-charts"],
    "owner": {
      "reputation": 21,
      "user_id": 9907670,
      "user_type": "registered",
      "profile_image": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=128",
      "display_name": "Reema Alhassan",
      "link": "https://stackoverflow.com/users/9907670/reema-alhassan"
    },
    "is_answered": true,
    "view_count": 4481,
    "accepted_answer_id": 51748296,
    "answer_count": 2,
    "score": 0,
    "last_activity_date": 1630304469,
    "creation_date": 1533480626,
    "last_edit_date": 1630304469,
    "question_id": 51695353,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/51695353/how-to-make-the-advanced-pie-chart-in-ngx-charts-in-angular2-vertically",
    "title": "How to make the &quot;advanced pie chart&quot; in ngx charts in angular2 vertically?"
  }, {
    "tags": ["javascript", "angular", "typescript"],
    "owner": {
      "reputation": 3646,
      "user_id": 2242700,
      "user_type": "registered",
      "accept_rate": 50,
      "profile_image": "https://i.stack.imgur.com/3wTVZ.gif?s=128&g=1",
      "display_name": "A. Duff",
      "link": "https://stackoverflow.com/users/2242700/a-duff"
    },
    "is_answered": true,
    "view_count": 8161,
    "accepted_answer_id": 39047191,
    "answer_count": 4,
    "score": 4,
    "last_activity_date": 1630136336,
    "creation_date": 1471637519,
    "question_id": 39047011,
    "content_license": "CC BY-SA 3.0",
    "link": "https://stackoverflow.com/questions/39047011/accessing-input-field-value-without-ngmodel-in-angular2-typescript",
    "title": "Accessing input field value without ngModel in Angular2/Typescript"
  }], "has_more": true, "quota_max": 300, "quota_remaining": 94
};
const mockResponseWeather: any = {
  "items": [{
    "tags": ["r", "machine-learning", "classification", "multiclass-classification"],
    "owner": {
      "reputation": 33,
      "user_id": 6784702,
      "user_type": "registered",
      "profile_image": "https://www.gravatar.com/avatar/11bac147fa4f5d62b3c360d7447f5612?s=128&d=identicon&r=PG&f=1",
      "display_name": "wgrt",
      "link": "https://stackoverflow.com/users/6784702/wgrt"
    },
    "is_answered": false,
    "view_count": 22,
    "closed_date": 1630822636,
    "answer_count": 0,
    "score": -1,
    "last_activity_date": 1630693600,
    "creation_date": 1630691067,
    "last_edit_date": 1630693600,
    "question_id": 69048831,
    "link": "https://stackoverflow.com/questions/69048831/how-to-include-time-delayed-weather-variables-in-a-classifier",
    "closed_reason": "Needs more focus",
    "title": "How to include time-delayed weather variables in a classifier?"
  }, {
    "tags": ["python", "openweathermap"],
    "owner": {
      "reputation": 966,
      "user_id": 12152982,
      "user_type": "registered",
      "profile_image": "https://www.gravatar.com/avatar/85a96f15c74d4368c8399d71a09d8834?s=128&d=identicon&r=PG&f=1",
      "display_name": "anon_dcs3spp",
      "link": "https://stackoverflow.com/users/12152982/anon-dcs3spp"
    },
    "is_answered": false,
    "view_count": 11,
    "answer_count": 0,
    "score": 0,
    "last_activity_date": 1630674563,
    "creation_date": 1630674563,
    "question_id": 69045477,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/69045477/how-to-retrieve-weather-forecast-from-openweathermap-for-a-given-local-date-and",
    "title": "How To Retrieve Weather Forecast From OpenWeatherMap For A Given Local Date and Time expressed using Local Time Zone?"
  }, {
    "tags": ["javascript", "html", "css", "node.js"],
    "owner": {
      "reputation": 1,
      "user_id": 16812068,
      "user_type": "registered",
      "profile_image": "https://lh3.googleusercontent.com/a/AATXAJwNvulOCtkcPv-PMRzj0Qf4iZcFwYGW9rnzLhc6=k-s128",
      "display_name": "Refiloe Kooma",
      "link": "https://stackoverflow.com/users/16812068/refiloe-kooma"
    },
    "is_answered": false,
    "view_count": 28,
    "closed_date": 1630566391,
    "answer_count": 0,
    "score": -2,
    "last_activity_date": 1630566011,
    "creation_date": 1630566011,
    "question_id": 69025534,
    "link": "https://stackoverflow.com/questions/69025534/how-do-i-get-south-africas-api-key-weather-forecast",
    "closed_reason": "Needs more focus",
    "title": "How do I get South Africa&#39;s API key (weather forecast)"
  }, {
    "tags": ["reactjs"],
    "owner": {
      "reputation": 39,
      "user_id": 16686544,
      "user_type": "registered",
      "profile_image": "https://i.stack.imgur.com/JOgtt.jpg?s=128&g=1",
      "display_name": "TheRealJohnDoe",
      "link": "https://stackoverflow.com/users/16686544/therealjohndoe"
    },
    "is_answered": false,
    "view_count": 43,
    "answer_count": 2,
    "score": 0,
    "last_activity_date": 1630557919,
    "creation_date": 1630400396,
    "last_edit_date": 1630403343,
    "question_id": 68995784,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/68995784/how-can-i-fix-an-error-of-displaying-weather-icons-in-react",
    "title": "How can i fix an error of displaying weather Icons in react"
  }, {
    "tags": ["vue.js", "vuejs2"],
    "owner": {
      "reputation": 13,
      "user_id": 12230210,
      "user_type": "registered",
      "profile_image": "https://www.gravatar.com/avatar/f6d175bf9251e7682f78d071beead1be?s=128&d=identicon&r=PG&f=1",
      "display_name": "sanss",
      "link": "https://stackoverflow.com/users/12230210/sanss"
    },
    "is_answered": false,
    "view_count": 20,
    "answer_count": 1,
    "score": 0,
    "last_activity_date": 1630451579,
    "creation_date": 1630448442,
    "question_id": 69005869,
    "content_license": "CC BY-SA 4.0",
    "link": "https://stackoverflow.com/questions/69005869/weather-app-with-vue-js-and-open-weather-map-api-and-7-day-weather-forecast",
    "title": "Weather app with Vue js and Open Weather Map API and 7 day weather forecast"
  }], "has_more": true, "quota_max": 300, "quota_remaining": 91
};

export default new StackoverflowEntryFeature();
