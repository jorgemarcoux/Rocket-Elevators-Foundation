sql = "SELECT quotes.id as quote_id, quotes.created_at as quote_created_at, company_name, email, elevator_number FROM quotes 
INNER JOIN users ON quotes.user_id = users.id 
INNER JOIN customers ON users.id = customers.user_id"

mysql = {
  adapter: 'mysql2',
  encoding: 'utf8',
  database: 'app_development'
}

pg = {
  adapter: 'postgresql',
  encoding: 'unicode',
  database: 'dwh_development'
}

fact_quotes = ActiveRecord::Base.establish_connection(mysql).connection.execute(sql)
puts fact_quotes