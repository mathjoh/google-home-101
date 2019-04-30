package com.github.mathjoh.googlehomekotlin

import com.github.mathjoh.googlehomekotlin.weather.WeatherRequest
import com.github.mathjoh.googlehomekotlin.weather.WeatherResponse

class VoiceResponseBuilder {


    fun createGoogleResponse(request: WeatherRequest, result: WeatherResponse?): Map<String, Any> {
        return mapOf("fulfillmentText" to createFulfillmentText(result),
                "fulfillmentMessages" to listOf(createFulfillmentCard()),
                "price" to (result?.price ?: Int.MAX_VALUE))
    }

    fun createGoogleResponse(request: WeatherRequest, result: WeatherResponse?): Map<String, Any> {
        return mapOf("fulfillmentText" to createFulfillmentText(request, result),
                "fulfillmentMessages" to listOf(createFulfillmentCard()))
    }

    private fun createFulfillmentText(result: WeatherResponse?): String {
        if (result == null) {
            return "Sorry we could not find any flight data for the specified time and place. Is there anything else I can help you with?"
        }
        if (result.returnOrigin == null) {
            return "Flights from ${result.departureOrigin} to ${result.departureDestination} starts from ${result.price} NOK, " +
                    "flying with ${result.airlines}. Is there anything else I can help you with?"
        }
        return "Roundtrip flights from ${result.departureOrigin} to ${result.departureDestination} leaving ${result.departureDate} and returning " +
                "${result.returnDate} from ${result.returnOrigin} to ${result.returnDestination} start at ${result.price} NOK, " +
                "flying with ${result.airlines}. Is there anything else I can help you with?"
    }

    private fun createFulfillmentText(request: WeatherRequest, result: WeatherResponse?): String {
        if (result == null) {
            return "Sorry we could not find any flight data for the specified time and place. Is there anything else I can help you with?"
        }
        if (request.from == null) {
            return "Flights to ${request.to} starts from ${result.price} NOK. Is there anything else I can help you with?"
        }
        return "Roundtrip flights from ${request.from} to ${request.to} leaving ${result.departureDate} and coming back " +
                "${result.returnDate} start at ${result.price} NOK. Is there anything else I can help you with?"
    }

    private fun createFulfillmentCard(): Map<String, Any> {
        val card = mapOf(
                "title" to "Finn Reise FlySøk",
                "subtitle" to "Norges beste flysøk",
                "imageUri" to "https://www.finn.no/assets/finn-logo-large.png",
                "buttons" to listOf(mapOf(
                        "text" to "Goto Finn Reise",
                        "postback" to "https://www.finn.no/reise/")
                )
        )
        return mapOf("card" to card)
    }
}