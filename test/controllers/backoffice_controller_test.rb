require 'test_helper'

class BackofficeControllerTest < ActionDispatch::IntegrationTest
  test "should get show_users" do
    get backoffice_show_users_url
    assert_response :success
  end

  test "should get show_quotes" do
    get backoffice_show_quotes_url
    assert_response :success
  end

  test "should get edit_profiles" do
    get backoffice_edit_profiles_url
    assert_response :success
  end

end
