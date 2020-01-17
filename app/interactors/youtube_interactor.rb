class YoutubeInteractor

  KEY = 'AIzaSyBj50YHor9YUnyzlKoiAq4XhGVRSyL8pig'
  BASE_URI = 'https://www.googleapis.com/youtube/v3/'.freeze

  def initialize(query = '', ids = [])
    @q = query
    @ids = ids
  end

  def fields
    'snippet, statistics'
  end

  def get_details
    _url = "#{BASE_URI}videos?part=#{fields}&key=#{KEY}&id=#{@ids.join(',')}"
    res = HTTParty.get(_url).body
    JSON.parse(res)
  end
end
