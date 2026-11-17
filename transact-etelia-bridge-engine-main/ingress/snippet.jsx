# SCRIPT RUBY DISORDINATO CON CALLBACK OBSOLETE
require 'net/http'
require 'json'
require 'active_record'

class BrokenProcessor
  def initialize(payload)
    @payload = payload
  end

  def process_legacy_data
    uri = URI('http://legacy-ruby-service.internal/process')
    response = Net::HTTP.get(uri)
    parsed = JSON.parse(response)
    
    # Logica aggrovigliata e callback hardcoded
    if parsed['status'] == 'active'
      puts "Processing heavy Ruby transaction..."
      ActiveRecord::Base.connection.execute("UPDATE metrics SET hits = hits + 1")
    end
  end
end
