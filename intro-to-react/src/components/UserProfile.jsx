/*
Task: to create a component that looks like this
<UserProfile name="", role="", display_pic="abc.jpg"
Custom tag = Components
values = Properties

HTML STYLE stle ="display:flex", border-radius
JSX{{}}, borderRadius
*/

export function UserProfile({name, role, display_pic} ){ //its an object so curly braces
    return(
        <article style = {{border: "1px solid gray", padding: "10px", borderRadius:"5%"}}>
            <img src={display_pic}></img>
            <h3>{name}</h3>
            <h1>{role}</h1>
        </article>
    );
}
