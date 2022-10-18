# frozen_string_literal: true

class :API::V1::MessagesController < ApplicationController
  def index
    @messages = Message.all
    respond_to do |format|
      format.json { render json: @messages }
      format.html { render json: @messages }
    end
  end

  def random_message
    random_num = rand(Message.count)
    @message = Message.all[random_num].text
    respond_to do |format|
      format.json { render json: @message }
      format.html { render json: @message }
    end
  end
end
