package com.example.application;

import java.util.List;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.Nonnull;


@BrowserCallable
@AnonymousAllowed 
public class TodoEndpoint {
  private TodoRepository repository;

  public TodoEndpoint(TodoRepository repository) { 
    this.repository = repository;
  }

  public @Nonnull List<@Nonnull Todo> findAll() { 
    return repository.findAll();
  }

  public Todo save(Todo todo) {
    return repository.save(todo);
  }
}