class Api::PeopleController < ApplicationController
  before_action :set_person, only: [:show, :update, :destroy]

  def index
    render json: Person.all
  end

  def show
    render json: @person
  end

  def create
    person = Person.new(person_params)

    if person.save
      render json: person, status: :created
    else
      render json: person.errors, status: :unprocessable_entity
    end
  end

  def update
    if @person.update(person_params)
      render json: @person
    else
      render json: @person.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @person.destroy
  end

  private

  def set_person
    @person = Person.find(params[:id])
  end

  def person_params
    params.require(:person).permit(:first_name, :last_name, :email)
  end
end
