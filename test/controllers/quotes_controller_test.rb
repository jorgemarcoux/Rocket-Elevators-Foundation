require 'test_helper'

class QuotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @quote = quotes(:one)
  end

  test "should get index" do
    get quotes_url
    assert_response :success
  end

  test "should get new" do
    get new_quote_url
    assert_response :success
  end

  test "should create quote" do
    assert_difference('Quote.count') do
      post quotes_url, params: { quote: { apartments: @quote.apartments, basements: @quote.basements, businesses: @quote.businesses, elevator_number: @quote.elevator_number, elevator_shafts: @quote.elevator_shafts, floors: @quote.floors, install_fee: @quote.install_fee, occupants: @quote.occupants, opening_hours: @quote.opening_hours, parking_spaces: @quote.parking_spaces, product_line: @quote.product_line, total_price: @quote.total_price, unit_price: @quote.unit_price, user_id: @quote.user_id } }
    end

    assert_redirected_to quote_url(Quote.last)
  end

  test "should show quote" do
    get quote_url(@quote)
    assert_response :success
  end

  test "should get edit" do
    get edit_quote_url(@quote)
    assert_response :success
  end

  test "should update quote" do
    patch quote_url(@quote), params: { quote: { apartments: @quote.apartments, basements: @quote.basements, businesses: @quote.businesses, elevator_number: @quote.elevator_number, elevator_shafts: @quote.elevator_shafts, floors: @quote.floors, install_fee: @quote.install_fee, occupants: @quote.occupants, opening_hours: @quote.opening_hours, parking_spaces: @quote.parking_spaces, product_line: @quote.product_line, total_price: @quote.total_price, unit_price: @quote.unit_price, user_id: @quote.user_id } }
    assert_redirected_to quote_url(@quote)
  end

  test "should destroy quote" do
    assert_difference('Quote.count', -1) do
      delete quote_url(@quote)
    end

    assert_redirected_to quotes_url
  end
end
