require './lib/dwh/sync.rb'
namespace :dwh do
  task :sync  => :environment do
    DimCustomer.destroy_all
    FactContact.destroy_all
    FactElevator.destroy_all
    FactQuote.destroy_all

    Dwh::Sync.sync_fact_quotes
    Dwh::Sync.sync_fact_leads
    Dwh::Sync.sync_dim_customers
  end
end