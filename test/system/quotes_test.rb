require "application_system_test_case"

class QuotesTest < ApplicationSystemTestCase
  setup do
    @quote = quotes(:one)
  end

  test "visiting the index" do
    visit quotes_url
    assert_selector "h1", text: "Quotes"
  end

  test "creating a Quote" do
    visit quotes_url
    click_on "New Quote"

    fill_in "Apartments", with: @quote.apartments
    fill_in "Basements", with: @quote.basements
    fill_in "Businesses", with: @quote.businesses
    fill_in "Elevator number", with: @quote.elevator_number
    fill_in "Elevator shafts", with: @quote.elevator_shafts
    fill_in "Floors", with: @quote.floors
    fill_in "Install fee", with: @quote.install_fee
    fill_in "Occupants", with: @quote.occupants
    fill_in "Opening hours", with: @quote.opening_hours
    fill_in "Parking spaces", with: @quote.parking_spaces
    fill_in "Product line", with: @quote.product_line
    fill_in "Total price", with: @quote.total_price
    fill_in "Unit price", with: @quote.unit_price
    fill_in "User", with: @quote.user_id
    click_on "Create Quote"

    assert_text "Quote was successfully created"
    click_on "Back"
  end

  test "updating a Quote" do
    visit quotes_url
    click_on "Edit", match: :first

    fill_in "Apartments", with: @quote.apartments
    fill_in "Basements", with: @quote.basements
    fill_in "Businesses", with: @quote.businesses
    fill_in "Elevator number", with: @quote.elevator_number
    fill_in "Elevator shafts", with: @quote.elevator_shafts
    fill_in "Floors", with: @quote.floors
    fill_in "Install fee", with: @quote.install_fee
    fill_in "Occupants", with: @quote.occupants
    fill_in "Opening hours", with: @quote.opening_hours
    fill_in "Parking spaces", with: @quote.parking_spaces
    fill_in "Product line", with: @quote.product_line
    fill_in "Total price", with: @quote.total_price
    fill_in "Unit price", with: @quote.unit_price
    fill_in "User", with: @quote.user_id
    click_on "Update Quote"

    assert_text "Quote was successfully updated"
    click_on "Back"
  end

  test "destroying a Quote" do
    visit quotes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Quote was successfully destroyed"
  end
end
