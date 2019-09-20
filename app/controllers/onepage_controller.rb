class OnepageController < ApplicationController
  before_action :authenticate_user!, :except => [:index ]

  def index

  end

  def info
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
      date = eventdate.to_datetime
      now = DateTime.now
      if now < date
        @upcomingevents << anevent
      else
        @pastevents << anevent
      end
    end

    @current_user.sent_matches

    render :json => {:user => current_user, :users => @users, :upcomingevents => @upcomingevents, :pastevents => @pastevents, :matchedperson => @current_user.sent_matches}, status: :ok
  end

end