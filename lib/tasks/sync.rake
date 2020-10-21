require './lib/dwh/sync.rb'
namespace :dwh do
  task :sync  => :environment do
    Second::Base.connection.execute('TRUNCATE dim_customers RESTART IDENTITY')
    Second::Base.connection.execute('TRUNCATE fact_quotes RESTART IDENTITY')
    Second::Base.connection.execute('TRUNCATE fact_contacts RESTART IDENTITY')
    Second::Base.connection.execute('TRUNCATE fact_elevators RESTART IDENTITY')
    Dwh::Sync.sync_fact_quotes
    Dwh::Sync.sync_dim_customers
    Dwh::Sync.sync_fact_contacts
    Dwh::Sync.sync_fact_elevators
  end
end