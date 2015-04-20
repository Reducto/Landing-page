class HomeController < ApplicationController
  def index
  end

  def send_mail
  	name, number, email = params[:name], params[:number], params[:email]
    if name.present? && number.present? && email.present?
  		CourseMailer.course(name, number, email).deliver_later
  		render json: {status: "ok"}
    else
      render json: {status: "error"}, status: 500
    end
  end
end
