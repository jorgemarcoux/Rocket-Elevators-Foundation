-- Fact Quotes:

-- Not so good:

select * from quotes
left join users
on quotes.user_id = users.id
left join customers
on users.id = customers.user_id

-- Better:

SELECT quotes.id as quote_id, quotes.created_at as quote_created_at, company_name, email, elevator_number 
FROM quotes 
INNER JOIN users ON quotes.user_id = users.id 
INNER JOIN customers ON users.id = customers.user_id