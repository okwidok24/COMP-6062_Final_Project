const app = Vue.createApp({
    data()
    {
        return{
            profile:[],
            city: 'London',
            province: 'Ontario',
            country:'Canada',
            weather:[],
            word: '',
            definition:[]
        }
    },
    created()
    {
        this.fetchprofile();
        this.dispweather();
    },
    methods:
    {
        fetchprofile()
        {
            fetch('https://comp6062.liamstewart.ca/random-user-data')
            .then(response => {
                if(response.ok)
                {
                    return response.json();
                }
                else
                {
                    console.log("Error: Please Try Again");
                }
            })
            .then(data => {
                this.profile = data.user_profile;
            })
            .catch(error => {
                console.log("Total Failure");
            });
        },
        dispweather()
        {
            let city = this.city;
            let province = this.province;
            let country = this.country;

            fetch('https://comp6062.liamstewart.ca/weather-data?city='+city+'&province='+province+'&country='+country)
            .then(response => {
                if(response.ok)
                {
                    return response.json();
                }
                else
                {
                    console.log("Error: Please Try Again");
                }
            })
            .then(data => {
                this.weather = data.weather_data;
            })
            .catch(error => {
                console.log("Total Failure");
            });
        },
        defineword()
        {
            let word = this.word;
            fetch('https://comp6062.liamstewart.ca/api/define?word='+word)
            .then(response => {
                if(response.ok)
                {
                    return response.json();
                }
                else
                {
                    console.log("Error: Please Try Again");
                }
            })
            .then(data => {
                this.definition = data;
            })
            .catch(error => {
                console.log("Total Failure");
            });

        }

    }

});

app.mount('#app');