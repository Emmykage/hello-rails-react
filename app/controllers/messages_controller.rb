# frozen_string_literal: true

class MessagesController < ApplicationController
  def index
    render json: { greeting: Message.all.sample.greeting }, status: :ok
  end
end
