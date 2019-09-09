class OnepageController < ApplicationController
  before_action :authenticate_user!

  def index
    email = current_user.email
    p email
    domain = email.split("@").last
    p domain
    @users = User.where("email like ? ", "%#{domain}%")

    @events = current_user.events
    # p @events
    @upcomingevents = []
    @pastevents =[]
    @events.each do |anevent|
      # date = Date.parse(anevent.eventdate)

      eventdate = anevent.eventdate
      date = eventdate.to_datetime.utc
      now = DateTime.now.utc
      if now < date
        @upcomingevents << anevent
      else
        @pastevents << anevent
      end
    end

    @current_user.sent_matches
    # p upcomingevents
    # p pastevents
  end
end