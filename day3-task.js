// task 1 - Simulate an API call with setTimeout using promises


function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const data = "Data fetched successfully";
            resolve(data);
        }, 1000);
    });
}

fetchdata().then(data=>{
    console.log(data)
}).catch(error=>{
    console.log("Error fetching data", error);
})

//output - Data fetched successfully

//task 2 - Fetch posts from JSONPlaceholder API and display titles and user IDs. 


function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(request=>{
        if(!request.ok){
            console.log(`Data is not fetched successfully because ${request.status}`);

        }
        return request.json();
    }).then(posts=>{
        posts.forEach(post=>{
            console.log(`Title: ${post.title}`);
            console.log(`User ID: ${post.userId}`);
            console.log(`\n`);

        });
    }).catch(error=>{
        console.error("There is problem man...look out - ", error);
    });
}

fetchData()

