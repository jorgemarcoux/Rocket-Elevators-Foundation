require 'leads_controller'
require 'spec_helper'
require "rails_helper"

RSpec.describe LeadsController, type: :controller do
     describe "#avoid_employee" do
        context 'Avoid CodeBoxx employees to fill out contact form' do
          it 'sends alert if you use a CodeBoxx email' do
          expect(LeadsController.avoid_employee). to eql("DON'T")
          end
        end
    end
end

