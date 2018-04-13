# Redux Tutorial<TODO> by TypeScript
ReduxのTutorialをTypeScriptでやってみました. (n番煎じ)　  
とりあえずの自分なりのベストプラクティスを書き記します.


## Setup

```shell
$ create-react-app <App名> --scripts-version=react-scripts-ts # TypeScriptで作成.
$ yarn add redux react-redux #reduxを追加
$ yarn add -D @types/react-redux tslint-config-airbnb # reduxのtypeと、air-bnbのtslintを追加.
```

## Linter

自らを律すため、`tslint-config-airbnb`を導入.

globalを

```json
"globals": {
    "window": true,
    "location": true,
    "document": true
  },
```
とか書いとくと良い.   


詳しいrulesは `tslint.json` を確認.

## Action, Action Creator
Actionは [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action) を参考にして、値は `payload` 内に格納するように実装.  
interfaceは Redux のActionをextendsしておく.

```js
interface AddTodoAction extends Action {
  type: ActionTypes.ADD_TODO;
  payload: {
    id: number;
    text: string;
  };
}
```

また、ActionTypeはenumとして定義することで、よりsafeな実装に.    


```js
export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER',
  TOGGLE_TODO = 'TOGGLE_TODO',
}

```

Reducerのaction引数の型を指定するために、TodoActionsという共有型としてtypeをexportしておくと良い.

```js
export type TodoActions = AddTodoAction | SetVisibilityFilterAction | ToggleTodoAction;
```


## State
Stateは `states/` 内でinterface定義. 各stateはReduxの思想に乗っ取り、readonlyに指定する.  
ObjectなStateも定義しておくことで、各所でtypeを利用できて便利.

```js
export interface TodoState {
  readonly id: number;
  readonly text: string;
  readonly completed: boolean;
}
```

また、Storeで保持されるRootのStateをinterfaceで定義することで、ドキュメント的にStateの内部を記述しておける.


```js
export interface State {
  readonly visibilityFilter: VisibilityFilters;
  readonly todos: TodoState[];
}
```

## Reducer、Store
素直に実装すれば良い.

## Presentational component
Presentational componentなので、基本的にSFCになるよう実装.  
引数の `props` はTutorial内では `({ active, children, onClick })` のように記述されていたが、こちらを参考に、関数内でpropsを展開.  
やってることは変わらないので、好みで決めていいと思う. 個人的に、引数に書くと変数定義部が冗長になりすぎてしまうので、関数内のほうが好み.  
各componentのpropsはOwnPropsとしてinterfaceを定義.

```js
export interface OwnProps {
  active: boolean;
  onClick: () => any;
}

const Link: React.SFC<OwnProps> = (props) => {
  const { children, active, onClick } = props;

  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px',
      }}
    >
      {children}
    </button>
  );
};

export default Link;
```

Provider直下のAppもSFCでいいと思う.

```js
const App: React.SFC = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
```

## Container component
やり過ぎ感はあるが、 `mapStateToProps` の戻り値として、 `StateToProp` interface、 `mapDispatchToProps` として、 `DispatchToProps` interface を定義.

```js
interface StateToProps {
  todos: TodoState[];
}

interface DispatchToProps {
  toggleTodo: (id: number) => any;
}
```

Tutorialの `AddTodo` は `connect()(AddTodo)` されたことで、AddTodoのtypeが曖昧になってしまうので、 `connect()(AddTodo)` したものを、そのままexportすると良い.


## 更新日
2018.4.13
