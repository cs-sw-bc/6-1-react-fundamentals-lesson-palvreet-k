import { UserProfile } from "./UserProfile";

// Every return must return only single HTML object not multiple
// the single HTML can be nested

export function ClassList() {
    return (
        <div style = {{display:"flex"}}>
            <UserProfile name="Reet" role="Student" display_pic="https://randomuser.me/api/portraits/women/3.jpg"></UserProfile>
            <UserProfile name="Roy" role="Instructor" display_pic="https://randomuser.me/api/portraits/men/3.jpg"></UserProfile>
            <UserProfile name="Troy" role="Teacher" display_pic="https://randomuser.me/api/portraits/women/4.jpg"></UserProfile>
            <UserProfile name="Joe" role="Student" display_pic="https://randomuser.me/api/portraits/men/17.jpg"></UserProfile>
            <UserProfile name="Rachel" role="Teacher" display_pic="https://randomuser.me/api/portraits/women/6.jpg"></UserProfile>
            <UserProfile name="Ross" role="Student" display_pic="https://randomuser.me/api/portraits/men/11.jpg"></UserProfile>
            <UserProfile name="Monica" role="Student" display_pic="https://randomuser.me/api/portraits/women/7.jpg"></UserProfile>
        </div>
    );
}