//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow{
constructor (showName, showGenre, showRatings, showResolution) {
    this.showName = showName
    this.showGenre= showGenre
    this.showRatings = showRatings
    this.showResolution =showResolution
}
    enjoyable(){
        console.log("this show is enjoyable")

    }
    funny() {
        console.log("this show is funny")
    }
    badShow(){
        alert("This is a garbage show OMG!")
    }
}


let schoolOfChocolate = new NetflixShow ("schoolOfChocolate", "reality TV", 5,["720p", "1080p", "4k"])

