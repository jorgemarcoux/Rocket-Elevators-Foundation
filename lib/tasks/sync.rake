require './lib/dwh/sync.rb'
namespace :dwh do
  task :sync  => :environment do
    Dwh::Sync.sync_fact_quotes
    Dwh::Sync.sync_dim_customers
  end
end