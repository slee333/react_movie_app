# Movie App tutorial 2019

Made by Seung Wook Lee thanks to Nomad Coder

## Notes and lessons

### Components 

#### class component 

**Function Component**

When you need not to use *state*

>   function blah () { return blahlah }


**Class Component** allows you to use *state*. And functions underneath happen in order:

**Mounting**: When component is born

- *Constructor*: Before render. At the beginning!

- *render()*: Rendering your page. WOO HOOO!

- *ComponentDidMount*: **After** rendering is done!


**Upadating**: When you update you component

- *ComponentDidUpdate*: After *render()*. Everytime component gets updated and re-render the page.

**Unmounting**: When component dies T-T

- *ComponentDidUnmount*: When component dies, execute this. I wonder how many times I would use this? HMMM...

> class App extends React.Component {
> // class App is React Component. It extends from React.Component. To show sth on the screen you render and return HTML
> // React automatically renders these
> // Reasons to use class components: state!
> // state: object. you put your data (that will change) in here. 추후에 바뀌는 데이터를 넣는다!
> state = {
>   count: 0
> };
>
> // Lets add a few JS code. Must use setState() to re-render your function!
>
>
> add = () => {
>   // current: basically same as this.state. More neat and nice. Avoid overusage of this.setState
>   // this.setState({ count: this.state.count - 1 }); <--- so you don't have to do this
>   // Everytime you setState(), React renders again!
>   this.setState(current => ({ count: current.count + 1 }));
> };
> subtract = () => {
>   this.setState(current => ({ count: current.count - 1 }));
> };
>

### Making movie app

#### Axios

Fetch data! Better than JS's fetch()!

#### Async / Await

For process that takes some time and must be awaited!

*Async*: Telling React that you gotta wait.
*await*: Telling React what you should wait for! Cannot use await without *Async*

**Example**
>   getMovies = async () => {
>
>   const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
>   
>   }