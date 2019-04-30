package com.github.mathjoh.googlehomekotlin.weather

import java.time.LocalDate

data class WeatherRequest(
        var location: String?,
        val to: String?,
        val departureDates: List<LocalDate>,
        val returnDates: List<LocalDate>,
        val sessionId: String
)