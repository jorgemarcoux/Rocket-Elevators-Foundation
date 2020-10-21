# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user = CreateAdminService.new.call
# puts 'CREATED ADMIN USER: ' << user.email

User.destroy_all
Address.destroy_all
Battery.destroy_all
Building.destroy_all
BuildingDetail.destroy_all
Employee.destroy_all
Customer.destroy_all
Lead.destroy_all
Column.destroy_all
Elevator.destroy_all

randUserCreation = 100

for i in 1..randUserCreation do
    addressy = Addressy::US.fetch(10)

    User.create(
        first_name: "Admin",
        email: "admin@admin.com",
        password: "admin123",
        is_admin: true,
        is_user: false
    )

    tmp_user = User.create(
        first_name: Faker::Name.unique.first_name,
        last_name: Faker::Name.unique.last_name,
        email: Faker::Internet.unique.email,
        title: Faker::Games::Overwatch.hero,
        created_at: Time.at((Time.local(2017, 7, 8).to_f - Time.local(2020, 7, 8).to_f)*rand + Time.local(2020, 7, 8).to_f),
        password: Faker::Internet.unique.password
    )

    tmp_customer_address = Address.create(
        type_of_address: ["House", "Apartment", "Commercial", "Corporate", "Hybrid"].sample,
        status: ["Active", "Inactive"].sample,
        entity: "Customer",
        number_and_street: addressy[0].street,
        suite_or_apartment: addressy[0].street.split(" ")[0],
        city: addressy[0].city,
        postal_code: addressy[0].zip,
        country: "USA",
        notes: Faker::Lorem.sentence(word_count: rand(3..9).floor),
        created_at: tmp_user.created_at
    )
    
    tmp_customer = Customer.create(
        address_id: tmp_customer_address.id,
        user_id: tmp_user.id,
        company_name: Faker::Company.unique.name,
        company_contact_full_name: Faker::Name.unique.name,
        company_contact_phone: Faker::PhoneNumber.cell_phone,
        company_contact_email: Faker::Internet.unique.email,
        company_description: Faker::Company.unique.catch_phrase,
        technical_authority_full_name: Faker::Name.unique.name,
        technical_authority_phone_number: Faker::PhoneNumber.cell_phone,
        technical_manager_email_service: Faker::Internet.unique.email,
        created_at: tmp_user.created_at
    )

    tmp_customer_address.update('customer_id' => tmp_customer.id)
    
    tmp_lead = Lead.create(
        user_id: tmp_user.id,
        full_name: tmp_user.first_name + " " + tmp_user.last_name,
        email: tmp_user.email,
        phone: Faker::PhoneNumber.cell_phone,
        business_name: tmp_customer.company_name,
        project_name: Faker::Name.unique.name,
        department: ["Elevator Consultant", "Building Manager", "Architect"].sample,
        project_description: Faker::Lorem.paragraph(sentence_count: 5),
        message: Faker::Lorem.paragraph(sentence_count: 5),
        created_at: Time.at((tmp_user.created_at.to_f - Time.local(2020, 7, 8).to_f)*rand + Time.local(2020, 7, 8).to_f)
    )

    tmp_building_address = Address.create(
        type_of_address: ["House", "Apartment", "Commercial", "Corporate", "Hybrid"].sample,
        status: ["Active", "Inactive"].sample,
        entity: "Building",
        number_and_street: addressy[1].street,
        suite_or_apartment: addressy[1].street.split(" ")[0],
        city: addressy[1].city,
        postal_code: addressy[1].zip,
        country: "USA",
        notes: Faker::Lorem.sentence(word_count: rand(3..9).floor),
        created_at: Time.at((tmp_user.created_at.to_f - Time.local(2020, 7, 8).to_f)*rand + Time.local(2020, 7, 8).to_f)
    )

    tmp_building = Building.create(
        address_id: tmp_building_address.id,
        customer_id: tmp_customer.id,
        administrator_full_name: Faker::Name.unique.name,
        administrator_email: Faker::Internet.unique.email,
        administrator_phone_number: Faker::PhoneNumber.cell_phone,
        technical_contact_full_name: Faker::Name.unique.name,
        technical_contact_email: Faker::Internet.unique.email,
        technical_contact_phone: Faker::PhoneNumber.cell_phone,
        created_at: tmp_building_address.created_at
    )

    tmp_building_address.update('building_id' => tmp_building.id)

    tmp_building_detail = BuildingDetail.create(
        building_id: tmp_building.id,
        information_key: Faker::Lorem.sentence(word_count: rand(3..9).floor),
        value: Faker::Lorem.sentence(word_count: rand(3..9).floor),
        created_at: tmp_building.created_at
    )

    tmp_battery = Battery.create(
        building_id: tmp_building.id,
        battery_type: ["Residential", "Commercial", "Corporate", "Hybrid"].sample,
        battery_status: "ACTIVE",
        date_of_commissioning: Time.at((tmp_user.created_at.to_f - Time.local(2018, 7, 8).to_f)*rand + Time.local(2018, 7, 8).to_f),
        date_of_last_inspection: Time.at((tmp_building.created_at.to_f - Time.local(2020, 7, 8).to_f)*rand + Time.local(2020, 7, 8).to_f),
        certificate_of_operations: "NYC buildings",
        information: Faker::Lorem.sentence(word_count: 6),
        notes: Faker::Lorem.sentence(word_count: rand(3..12).floor),
        created_at: Time.at((tmp_building.created_at.to_f - Time.local(2020, 7, 8).to_f)*rand + Time.local(2020, 7, 8).to_f)
    )

    tmp_column = Column.create(
        battery_id: tmp_battery.id,
        column_type: tmp_battery.battery_type,
        column_status: tmp_battery.battery_status,
        number_of_floors_served: rand(2..50).floor,
        information: Faker::Lorem.sentence(word_count: rand(3..12).floor),
        notes: Faker::Lorem.sentence(word_count: rand(3..12).floor),
        created_at: tmp_building.created_at
    )

    tmp_elevator = Elevator.create(
        column_id: tmp_column.id,
        serial_number: Faker::IDNumber.invalid,
        elevator_model: ["Elevatroma", "911-Elevator", "Elevator-Bee" , "Daily-Elevator"].sample,
        elevator_type: tmp_battery.battery_type,
        elevator_status: "ACTIVE",
        date_of_commissioning: tmp_battery.date_of_commissioning,
        date_of_last_inspection: tmp_battery.date_of_last_inspection,
        certificate_of_inspection: ["Rocket TMP", "General"].sample,
        information: Faker::Lorem.sentence(word_count: rand(3..12).floor),
        notes: Faker::Lorem.sentence(word_count: rand(3..12).floor),
        created_at: tmp_column.created_at
    )

    tmp_quote = Quote.create(
        user_id: tmp_user.id,
        building_type: tmp_battery.battery_type,
        unit_price: rand(7565..100000),
        install_fee: rand(2000..10000),
        total_price: rand(2000..1000000),
        elevator_number: rand(1..50).floor,
        product_line: ["Excelium", "Premium", "Standard"].sample,
        basements: rand(1..45).floor,
        floors: rand(1..100).floor,
        created_at: tmp_lead.created_at
    )

    if tmp_battery.battery_type == "Residential"
        tmp_quote.update("apartments" => rand(1..1000).floor)

    elsif tmp_battery.battery_type == "Commercial"
        tmp_quote.update("businesses" => rand(1..20).floor)
        tmp_quote.update("elevator_shafts" => rand(1..35).floor)
        tmp_quote.update("parking_spaces" => rand(1..140).floor)

    elsif tmp_battery.battery_type == "Corporate" || tmp_battery.battery_type == "Hybrid"
        tmp_quote.update("businesses" => rand(1..20).floor)
        tmp_quote.update("parking_spaces" => rand(1..140).floor)
        tmp_quote.update("occupants" => rand(1..1000).floor)
    end

    if tmp_battery.battery_type == "Hybrid"
        tmp_quote.update("opening_hours" => rand(1..24).floor)
    end
<<<<<<< HEAD
end
=======
end
>>>>>>> merging-all
