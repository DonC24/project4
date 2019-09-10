class EventsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  # GET /events
  # GET /events.json
  def index
    @events = Event.all
  end

  # GET /events/1
  # GET /events/1.json
  def show
    @event = Event.find(params[:id])
    render :json => @event, status: :ok
  end

  # GET /events/new
  def new
    @event = Event.new
  end

  # GET /events/1/edit
  def edit
  end

  # POST /events
  # POST /events.json
  def create
    p current_user
    p event_params

    @event = Event.new(event_params)

    # respond_to do |format| #only need to do this if want html AND json. but since only json, no need to "do ||"
      if @event.save
         # @event.users << current_user

        # format.html { redirect_to @event, notice: 'Event was successfully created.' }
        # format.json { render :show, status: :created, location: @event }
        render :json => @event, status: :ok
      else
        # format.html { render :new }
        # format.json { render json: @event.errors, status: :unprocessable_entity }
        render :json => @event.errors, status: :unprocessable_entity
      end
    # end
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    # p params
    # respond_to do |format|
      if @event.update(addevent_params)
        render :json => @event, status: :ok
        # format.html { redirect_to @event, notice: 'Event was successfully updated.' }
        # format.json { render :show, status: :ok, location: @event }
      else
        render :json => @event.errors, status: :unprocessable_entity
        # format.html { render :edit }
        # format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    # end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy
    respond_to do |format|
      format.html { redirect_to events_url, notice: 'Event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.permit(:name, :notes, :eventdate, :user_id)
    end

    def addevent_params
      params.permit(:name, :notes, :eventdate, :user_ids => [])
    end
end