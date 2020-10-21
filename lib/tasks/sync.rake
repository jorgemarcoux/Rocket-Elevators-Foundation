require './lib/dwh/sync.rb'
namespace :dwh do
  task :sync  => :environment do
    Second::Base.connection.execute('TRUNCATE dim_customers RESTART IDENTITY')
    Second::Base.connection.execute('TRUNCATE fact_quotes RESTART IDENTITY')
    Second::Base.connection.execute('TRUNCATE fact_leads RESTART IDENTITY')

    Dwh::Sync.sync_fact_quotes
    Dwh::Sync.sync_fact_leads
    Dwh::Sync.sync_dim_customers
  end
end
