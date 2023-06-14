import React from 'react'
import locationLogo from '../components/currentLocation.png'
import filterLogo from '../components/filter.png'

function SearchBar() {
    return (
        <div>
            <br />
            <div class="row justify-content-center">
                <div>
                    <form class="card">
                        <div class="card-body row align-items-center">
                            <div class="col-9">
                                <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Address, city" />
                            </div>
                            <div class="col-auto">
                                <button class="btn btn-lg btn-success" type="submit">Search</button>
                            </div>
                            <div class="col-auto">
                                <img src={locationLogo} alt="currentLocation" width={'40px'} />
                            </div>
                            <div class="col-auto">
                                <img src={filterLogo} alt="currentLocation"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
