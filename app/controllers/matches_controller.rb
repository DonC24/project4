class MatchesController < ApplicationController
  before_action :authenticate_user!

  # GET /matches
  # GET /matches.json
  def index
    @matches = Match.all
  end

  # GET /matches/1
  # GET /matches/1.json
  def show
  end

  # GET /matches/new
  def new
    @match = Match.new
  end

  # GET /matches/1/edit
  def edit
  end

  # POST /matches
  # POST /matches.json
  def create
    p current_user
    p params
    p params[:sender_ids]

    params[:sender_ids].each_with_index do |sender, i| #i stands for index
        # p sender_id: sender, recipient_id: params[:recipient_ids][i], event_id: params[:event_ids][i]
      @match = Match.new(sender_id: sender, recipient_id: params[:recipient_ids][i], event_id: params[:event_ids][i])
      @match.save
    end

    # @match = Match.new(match_params)

    # respond_to do |format| #only need to do this if want html AND json. but since only json, no need to "do ||"
    #  if @match.save


        # format.html { redirect_to @match, notice: 'match was successfully created.' }
        # format.json { render :show, status: :created, location: @match }
  #     render :json => @match, status: :ok
   #   else
        # format.html { render :new }
        # format.json { render json: @match.errors, status: :unprocessable_entity }
   #     render :json => @match.errors, status: :unprocessable_entity
   #   end
    # end
  end

  # PATCH/PUT /matches/1
  # PATCH/PUT /matches/1.json
  def update
    # p params
    # respond_to do |format|
      if @match.update(match_params)
        render :json => @match, status: :ok
        # format.html { redirect_to @match, notice: 'match was successfully updated.' }
        # format.json { render :show, status: :ok, location: @match }
      else
        render :json => @match.errors, status: :unprocessable_entity
        # format.html { render :edit }
        # format.json { render json: @match.errors, status: :unprocessable_entity }
      end
    # end
  end

  # DELETE /matches/1
  # DELETE /matches/1.json
  def destroy
    @match.destroy
    respond_to do |format|
      format.html { redirect_to matches_url, notice: 'match was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_match
      @match = Match.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def match_params
      params.permit(:sender_id, :recipient_id, :event_id)
    end

end