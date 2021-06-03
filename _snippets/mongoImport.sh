mongoimport --uri "mongodb+srv://user-pelis:<PASSWORD>@cluster-corre-la-voz-oz0oz.mongodb.net/flix?retryWrites=true&w=majority" --type csv -d flix -c redacted --headerline --drop .\netflix_titles.csv
