class CourseMailer < ApplicationMailer
	smtp_envelope_from = 'Mikel <mikel@test.lindsaar.net>'
  def course name, number, email
    @name, @number, @email = name, number, email
  	mail(:to => 'ukrcpk@yandex.ru', :subject => "Регистрация",:from => "'Запись на курс по ВОЛП' <ukrcpk@yandex.ru>")
  end
end
