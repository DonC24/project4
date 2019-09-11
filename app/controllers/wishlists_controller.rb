class WishlistsController < ApplicationController
  before_action :authenticate_user!

  # GET /matches
  # GET /matches.json
  def index
    @wishlists = Wishlist.all
  end

  # GET /matches/1
  # GET /matches/1.json
  def show
    p params

    @wishlists = Wishlist.all.where(event_id: params[:id])
    @event = Event.find(params[:id])
    render :json => {:matches => @wishlists, :event => @event}, status: :ok
  end

  # GET /matches/new
  def new
    @wishlist = Wishlist.new
  end

  # GET /matches/1/edit
  def edit
  end

  # POST /matches
  # POST /matches.json
  def create
    p current_user
    p params

    @wishlist = Wishlist.new(wishlist_params)

      if @wishlist.save

        render :json => @wishlist, status: :ok
      else

        render :json => @wishlist.errors, status: :unprocessable_entity
      end
  end

  # PATCH/PUT /matches/1
  # PATCH/PUT /matches/1.json
  def update
    # p params
    # respond_to do |format|
      if @wishlist.update(match_params)
        render :json => @wishlist, status: :ok
        # format.html { redirect_to @wishlist, notice: 'match was successfully updated.' }
        # format.json { render :show, status: :ok, location: @wishlist }
      else
        render :json => @wishlist.errors, status: :unprocessable_entity
        # format.html { render :edit }
        # format.json { render json: @wishlist.errors, status: :unprocessable_entity }
      end
    # end
  end

  # DELETE /matches/1
  # DELETE /matches/1.json
  def destroy
    @wishlist.destroy
    respond_to do |format|
      format.html { redirect_to matches_url, notice: 'match was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_event
    #   @event = Event.find(params[:id])
    # end

    # Never trust parameters from the scary internet, only allow the white list through.
    def wishlist_params
      params.permit(:item, :user_id, :event_id)
    end

end