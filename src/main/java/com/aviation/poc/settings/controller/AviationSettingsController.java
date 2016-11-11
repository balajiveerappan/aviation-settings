package com.aviation.poc.settings.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aviation.poc.settings.rest.client.AviationComponentApiClient;

@RestController
public class AviationSettingsController {

	@Autowired
	private AviationComponentApiClient componentApiClient;
	@RequestMapping(value="/splashScreen", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Object> getSplashData(@RequestParam String componentType){
		return componentApiClient.getSplashScreenData(componentType);
	}
}
