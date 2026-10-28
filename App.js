import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from './components/Movie'

class AllMovies extends React.Component {
    render() {
        return (
            <ScrollView>
                <Movie title={"Doctor Sleep"} year={2019} icon_name={"skull"} icon_color={"grey"}
                poster={require("./img/doctor-sleep.jpg")}/>

                <Movie title={"Midway"} year={2020} icon_name={"person-rifle"} icon_color={"green"}
                poster={require("./img/midway.jpg")}/>

                <Movie title={"Twilight"} year={2008} icon_name={"bottle-droplet"} icon_color={"red"}
                poster={{uri:'https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_.jpg'}}/>
            </ScrollView>
        );
    };
};

export default AllMovies;