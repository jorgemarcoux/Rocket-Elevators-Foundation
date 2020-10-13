require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get static_pages_index_url
    assert_response :success
  end

  test "should get quote" do
    get static_pages_quote_url
    assert_response :success
  end

  test "should get residential" do
    get static_pages_residential_url
    assert_response :success
  end

  test "should get corporate" do
    get static_pages_corporate_url
    assert_response :success
  end

  test "should get 404" do
    get static_pages_404_url
    assert_response :success
  end

end
