require './lib/dwh/sync.rb'
namespace :dwh do
  task :test_sync  => :environment do
    Dwh::Sync.sync_quote
  end
end