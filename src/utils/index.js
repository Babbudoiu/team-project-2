export const fetchUsers = async (e, email, username, pass, setUser) => {
    e.preventDefault();
    try {
        let response;
        if (email) {
            response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: pass
                })
            })
        } else {
            response = await fetch(`${process.env.REACT_APP_REST_API}users/${username}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    password: pass
                })
            })
        }
        const data = await response.json();
        localStorage.setItem("MyToken", data.token)
        setUser(data.user.username)
    } catch (error) {
        console.log(error)
    }
};


export const updateUserDetails = async (e,email, username, pass, user, setUser ) => {
    e.preventDefault();

    try {
        let response;
        if (username) {
            response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: pass,
                    currentUser: user
                })
            })
    }
    const data = await response.json();
    setUser(data.user.username)
    } catch (error) {
        console.log(error);
    }
};


export const deleteUser = async (user, setUser) => {
    try {
        let response;
        if (user) {
            response = await fetch(`${process.env.REACT_APP_REST_API}users/${user}`, {
                method: 'DELETE',
                headers: {"Authorization": `Bearer ${localStorage.removeItem("MyToken")}`},
                username: user,
            })
    }
    await response.json();
    setUser()
    } catch (error) {
        console.log(error);
    }
};

export const authUser = async (setUser) => {

    if(localStorage.MyToken){
        try {
            const response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
                method: 'GET',
                headers: {"Authorization": `Bearer ${localStorage.getItem("MyToken")}`}
            })
            const data = await response.json();
            setUser(data.username)
        } catch (error) {
            console.log(error);
        }
    }
};
   


//list all movies
export const findAllMovies = async (setMovies) => {
 let response;
    try {
       response = await fetch(`${process.env.REACT_APP_REST_API}moviesAll`)
    const data = await response.json();
    setMovies(data);
    } catch (error) {
        console.log(error);
    }
};


export const setMovieWatchlist = async ( movie ) => {
   
    try {
        let response
                response = await fetch(`${process.env.REACT_APP_REST_API}movies`,{
                method: 'PUT',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    inWatchlist: !movie.inWatchlist,
                    title: movie.title,
                    watched: movie.watched,
                    rating: movie.rating,
                    img: movie.img,
                    trailer: movie.trailer,
                    category: movie.category,
                    actor: movie.actor,
                    id: movie._id
                })
            })

     await response.json();
    } catch (error) {
        console.log(error);
    };
}


// add movie
export const addMovie = async (e, title, actor, category, rating, setMovie) => {
    e.preventDefault();
    try {
        let response;
        if (title) {
            response = await fetch(`${process.env.REACT_APP_REST_API}movies`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    title: title,
                    actor: actor,
                    category: category,
                    watched: false,
                    rating: rating,
                })
            })
        } 
        const data = await response.json();
        console.log(data.movies)
        setMovie(data.movies.title)
    } catch (error) {
        console.log(error)
    }
};

// delete movie 

export const deleteMovie = async (movie, title) => {
    try {
        let response;
        
        if (movie) {
            response = await fetch(`${process.env.REACT_APP_REST_API}movies/${title}`, {
                method:'DELETE',
                headers:{'content-Type' : 'application/json'},
                title: movie.title
            })
        }
        await response.json();
    
    } catch (error) {
        console.log(error);
    }
}


    

