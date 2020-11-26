require 'leads_controller'
require 'spec_helper'
require "rails_helper"

RSpec.describe LeadsController, type: :controller do
     describe "#lead_params" do
        context 'Avoid CodeBoxx employees to fill out contact form' do
          it 'sends alerts if you use a CodeBoxx email' do

          end
        end
    end
end

