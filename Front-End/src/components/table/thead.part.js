

function Thead({Sort, setSort}) {

    const Type = ["asc", "desc"];

    const handleSort = (e) => {
        if(Sort[0] === e.target.id) {
            if(Sort[1] === "asc") 
            setSort([e.target.id, Type[1]]); 
            else
            setSort([e.target.id, Type[0]]); 
        }
        else {
            setSort([e.target.id, Type[0]])
        }
    }

    return (
        <thead>
            <tr>
                <th className="p-id" >
                    <span id="id" onClick={handleSort} ><i class={Sort[0] === "id" ? Sort[1] === "asc" ?"fas fa-chevron-up TD115":"fas fa-chevron-down TD115" : ""}></i>ID</span>
                </th>
                <th >
                    <span id="name" onClick={handleSort}><i class={Sort[0] === "name" ? Sort[1] === "asc" ?"fas fa-chevron-up TD115":"fas fa-chevron-down TD115" : ""}></i>Name</span>
                </th>

                <th >
                    <span id="email" onClick={handleSort}><i class={Sort[0] === "email" ? Sort[1] === "asc" ?"fas fa-chevron-up TD115":"fas fa-chevron-down TD115" : ""}></i>Email</span>
                </th>
                <th >
                    <span id="gender" onClick={handleSort}><i class={Sort[0] === "gender" ? Sort[1] === "asc" ?"fas fa-chevron-up TD115":"fas fa-chevron-down TD115" : ""}></i>Gender</span>
                </th>
                <th>
                    <span onClick={handleSort}>Status</span>
                </th>
                <th>
                    <span class="fas fa-chevron-up"></span>
                </th>
            </tr>
        </thead>
    );
}

export default Thead;