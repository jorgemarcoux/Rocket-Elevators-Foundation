module Dwh
  class Sync

    def self.sync_quote
      my_sql_quotes = Quote.all    
      my_sql_quotes.each do |quote|
        FactQuote.create!({
          quote_id: quote.id,
          created_at: Time.now,
          updated_at: Time.now
          })
      end
    end

  end
end
