require 'open-uri'
require 'json'
Movie.destroy_all


uri = URI.open('https://tmdb.lewagon.com/movie/top_rated')
json = JSON.parse(uri.read)
json["results"].each do |movie|
  Movie.create!(
    title: movie['original_title'],
    overview: movie['overview'],
    poster_url: "https://image.tmdb.org/t/p/w500#{movie['poster_path']}",
    rating: movie['vote_average']
  )
end
